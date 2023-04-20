import { IMealsSchema } from './meals';
import { ISearchSchema } from './search';
import { IUserSchema } from './user';

export interface IStateSchema {
    meals: IMealsSchema;
    search: ISearchSchema;
    user: IUserSchema;
}
