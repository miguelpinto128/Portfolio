import { generator } from '../styles/generator';

export const breakpoints = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

export const spaceNames = ['mb', 'ml', 'mr', 'mt', 'pb', 'pl', 'pr', 'pt'] as const;

type Truthy = boolean | 'true' | 'false';

/**
 * Helper Types
 */
export type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<Record<propsArray[number], Truthy>>;
export type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
export type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
export type MqProp<T> = Partial<Record<typeof breakpoints[number], T>> | T | T[] | Partial<Record<typeof breakpoints[number], T>>[];
export type Breakpoint = typeof breakpoints[number];

/**
 * GeneratedPropsTypes
 */
type IndexKeys<T> = Exclude<keyof T, keyof []>;
type ListProp = { name: string; cssProp?: string; list?: object; helperFn?: Function; units?: string };
type ListPropValidation = { name: string; cssProp?: string; list?: object; helperFn?: undefined; units?: string };
type ListObject = { prefix?: string; list: object };
type ListObjectValidation = { prefix?: undefined; list: object };
type ListObjectWithPrefix = { prefix: string; list: object };

type GetName<P> = P extends ListPropValidation ? P['name'] : never;
type GetNamesWithPrefix<P> = P extends ListObjectWithPrefix ? keyof P['list'] : never;
type GetListKeys<P> = P extends ListProp ? keyof P['list'] : never;
type GetNames<P> = P extends ListObjectValidation ? keyof P['list'] : never;
type GetPrefixName<P> = P extends { prefix: string } ? P['prefix'] : never;

type PropsFromList<PropList extends ReadonlyArray<ListProp>> = {
    [i in IndexKeys<PropList> as GetName<PropList[i]>]?: MqProp<GetListKeys<PropList[i]>> | MqProp<string | number>;
};

type NamedPropsFromList<PropList extends ReadonlyArray<ListObject>> = {
    [i in IndexKeys<PropList> as GetNames<PropList[i]>]?: boolean;
};

type NamedPropsWithPrefixFromList<PropList extends ReadonlyArray<any>> = {
    [i in IndexKeys<PropList> as `${GetPrefixName<PropList[i]>}${Capitalize<
        string & GetNamesWithPrefix<PropList[i]>
    >}`]?: boolean;
};

type NamedProps = NamedPropsFromList<typeof generator.namedProps> &
    NamedPropsWithPrefixFromList<typeof generator.namedProps>;
type SpaceProps = Partial<Record<typeof spaceNames[number], MqProp<number | string>>>;
type VariableProps = PropsFromList<typeof generator.variableProps>;

type HelperFnsProps = {
    margin?: MqProp<number | string>;
    padding?: MqProp<number | string>;
};

type ChildrenProps = {
  children: any;
};

export type GeneratedPropTypes = NamedProps & SpaceProps & VariableProps & HelperFnsProps & ChildrenProps;
