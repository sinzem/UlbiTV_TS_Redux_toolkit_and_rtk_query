import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

/* (типизируем встроенные хуки с помощью созданных в store типов) */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
