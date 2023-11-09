import { DataCar } from "@/libs/models/car.model";
import CarItem from "@/ui/components/CarItem";

interface ListCarProps {
  row: DataCar[];
}

function ListCar({ row }: ListCarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {row.map((item, index) => (
        <CarItem key={index} {...item} />
      ))}
    </div>
  );
}

export default ListCar;
