import { IMealsSchema } from './meals';
import { ISearchSchema } from './search';

export interface IStateSchema {
    meals: IMealsSchema;
    search: ISearchSchema;
}
