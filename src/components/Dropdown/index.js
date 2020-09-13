import React from "react";

const Dropdown = ({ label, selected, option = [] }) => {
	return (
		<tr>
			<td className="font-weight-normal">{label}</td>
			<td className="font-weight-bold">:</td>
			<td className=" pt-2" style={{ width: "80%" }}>
				<select className=" browser-default custom-select ">
					<option selected disabled>
						{selected}
					</option>
					{option}
					{option.map((item, i) => {
						return (
							<option value={item} key={i}>
								{item}
							</option>
						);
					})}
				</select>
			</td>
		</tr>
	);
};

export default Dropdown;
