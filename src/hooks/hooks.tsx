import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../redux/rootStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;