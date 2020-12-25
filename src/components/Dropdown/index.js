import React from "react";

const Dropdown = ({ label, option = [],onClick='' }) => {
	return (
		<tr>
			<td className="font-weight-normal">{label}</td>
			<td className="font-weight-bold">:</td>
			<td className=" pt-2" style={{ width: "80%" }}>
				<select className=" browser-default custom-select ">
					
					{option.map((item, i) => {
						return (
							<option value={item} key={i} onClick={event=>onClick(event.target.value)} >
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
