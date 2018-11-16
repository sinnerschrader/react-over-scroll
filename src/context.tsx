import React, {createContext} from "react";

export interface IContext {
	page: number;
	progress: number;
	pages: number;
	anchors?: string;
}

export const DEFAULT_CONTEXT: IContext = {page: 0, progress: 0, pages: 0};
export const {Consumer: ScrollConsumer, Provider: ScrollProvider} = createContext(DEFAULT_CONTEXT);
