import { ParsedWsdl } from "./models/parsed-wsdl";
interface Options {
    modelNamePreffix: string;
    modelNameSuffix: string;
}
/**
 * Parse WSDL to domain model `ParsedWsdl`
 * @param wsdlPath - path or url to wsdl file
 */
export declare function parseWsdl(wsdlPath: string, options: Options): Promise<ParsedWsdl>;
export {};
//# sourceMappingURL=parser.d.ts.map