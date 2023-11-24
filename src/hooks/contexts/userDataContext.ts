import { createContext } from 'react';
import { IDataContext } from '../interfaces/dataContext.ts';

const UserDataContext = createContext<IDataContext>(null!);

export default UserDataContext;
