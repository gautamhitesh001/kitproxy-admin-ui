import { useState } from "react";
import { DeploymentCompleted } from "./deploymentCompleted";
import { DeploymentInProgress } from "./deploymentInProgress";
import { SelectResource } from "./selectResource";

export const Resource = () => {
	const [isResourceSelected, setIsResourceSelected] = useState(true);
	const [isDeploymentCompleted, setIsDeploymentCompleted] = useState(true);

	if (isResourceSelected) {
		if (isDeploymentCompleted) {
			return <DeploymentCompleted />;
		}
		return <DeploymentInProgress />;
	}
	return <SelectResource />;
};
