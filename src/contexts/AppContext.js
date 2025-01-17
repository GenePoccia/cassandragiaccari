import React from "react";
import { AboutContextProvider } from "./AboutContext";
import { ModalContextProvider } from "./ModalContext";
export const combineComponents = (...components) => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

const providers = [AboutContextProvider, ModalContextProvider];

export const AppContextProvider = combineComponents(...providers);
