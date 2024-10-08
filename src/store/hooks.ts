import {AppDispatch, RootState} from "./store.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;