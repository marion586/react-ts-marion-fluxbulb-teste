import React, { useEffect, useState, useMemo } from "react";
import { universityModel } from "./models/unversityItemModel";
import CardItemUniversity from "./components/CardItemUnivirsity";
import "./style.scss";
import Heading from "@/components/common/form/Headings";
import UniversityService from "./services";
import { selectUniversity, setUniversity } from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@/components/common/ui/Spinner";
import { Empty } from "antd";

type Props = {
  searchData: string;
};

const University = ({ searchData }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const universityData = useSelector(selectUniversity);

  const searchUniversityFromServer = async (name: string) => {
    const { data } = await UniversityService.getUniversityListByName(name);
    dispatch(setUniversity(data));
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchData !== "") {
      searchUniversityFromServer(searchData);
    }
    setIsLoading(false);
  }, [searchData]);
  return (
    <div className="university">
      <Heading
        title="Resultat de la Recherche:"
        level={4}
        style={{ color: "#949fb5" }}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="university__list">
          {universityData?.length ? (
            universityData.map((item: any, key: number) => (
              <CardItemUniversity data={item} key={key} />
            ))
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              className="university__empty"
              description={<span>Aucun unirsité Trouvé</span>}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(University);
