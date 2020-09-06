import React from "react";
import { MDBTypography, MDBBox } from "mdbreact";

const DetailDummy = ({ id }) => {
	return (
		<MDBTypography blockquote bqColor="success">
			<MDBBox tag="p" mb={0} className="bq-title">
				{id}
			</MDBBox>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?</p>
		</MDBTypography>
	);
};

export default DetailDummy;
