import React, { useEffect, useState, useMemo } from "react";
import { universityModel } from "./models/unversityItemModel";
import CardItemUniversity from "./components/CardItemUnivirsity";
import "./style.scss";
import Heading from "@/components/common/form/Headings";
import UniversityService from "./services";
import { selectUniversity, setUniversity, selectSearchData } from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@/components/common/ui/Spinner";
import { Empty } from "antd";
import { Link } from "react-router-dom";

const University = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const universityData = useSelector(selectUniversity);
  const searchData = useSelector(selectSearchData);
  const [textError, setTextError] = useState<any>(null);

  const searchUniversityFromServer = async (name: string) => {
    try {
      setTextError(null);
      setIsLoading(true);
      const { data } = await UniversityService.getUniversityListByName(name);
      dispatch(setUniversity(data));
    } catch (error) {
      setTextError("Il' ya un erreur");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchData) {
      searchUniversityFromServer(searchData);
    } else {
      dispatch(setUniversity(null));
    }
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
      ) : textError ? (
        <span>{textError}</span>
      ) : (
        <div className="university__list">
          {universityData?.length ? (
            universityData.map((item: any, key: number) => (
              <CardItemUniversity key={key} data={item} />
            ))
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              className="university__empty"
              description={
                <span>
                  Aucun unirsité Trouvé pour <strong>{searchData} </strong>
                </span>
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(University);
