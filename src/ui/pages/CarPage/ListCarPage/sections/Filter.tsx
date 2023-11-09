import { initialStateFilter } from "@/libs/constants/initial.state.response.model";
import { getListCar, setFilterCar } from "@/libs/redux/features/car.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { debounceTwo } from "@/libs/utils/debounce";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import InputSearch from "@/ui/components/Form/InputSearch";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Filter() {
  const { filter, status } = useAppSelector((state) => state.carSlice);
  const dispatch: AppDispatch = useDispatch();
  const [search, setSearch] = useState<string>(filter.search ?? "");
  const handleRefresh = () => {
    setSearch("");
    dispatch(setFilterCar(initialStateFilter));
    dispatch(getListCar());
  };
  return (
    <div className="mb-4 flex items-center px-6 lg:justify-end">
      <div className="flex w-full items-center justify-end gap-2 lg:w-1/2">
        <div className="w-full lg:w-72">
          <InputSearch
            value={search}
            noMargin
            onChange={(e) => {
              setSearch(e.target.value);
              debounceTwo(() => {
                dispatch(
                  setFilterCar({
                    ...filter,
                    search: e.target.value,
                  })
                );
                dispatch(getListCar());
              }, 800);
            }}
            loading={status === "loading"}
          />
        </div>
        <ButtonFill
          color="green"
          onClick={handleRefresh}
          className="inline-flex items-center gap-1"
        >
          <ArrowPathIcon className="h-4 w-4" /> Refresh
        </ButtonFill>
      </div>
    </div>
  );
}

export default Filter;
