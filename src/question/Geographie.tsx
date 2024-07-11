import { QCM } from "../format/QCM";
import { dataGeo } from "../data/data";

export const Geographie = () => {
  return <QCM name={"Geographie"} data={dataGeo} />;
};
