import { Http } from "@/services/http";

export default class UniversityService {
  static async getUniversityListByName(name: string): Promise<any> {
    return await Http.get(`search?name=${name}`);
  }
}
