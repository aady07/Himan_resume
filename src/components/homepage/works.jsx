import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./imp.jpg"
								alt="DMRC"
								className="work-image"
							/>
							<div className="work-title">DMRC</div>
							<div className="work-subtitle">
							Trainee at Rolling Stock Department
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

					
					</div>
				}
			/>
		</div>
	);
};

export default Works;
