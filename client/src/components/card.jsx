import React, { useState } from 'react';

const DocCard = () => {
  const [isDocVisible, setDocVisible] = useState(false);

  const toggleDoc = () => {
    setDocVisible(!isDocVisible);
  };

  return (
    <section>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-lg-4">
				<div class="card-flip">
					<div class="flip">
						<div class="front">
							<div class="card">
							  <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style="height: 180px; width: 100%; display: block;" data-holder-rendered="true"/>
							  <div class="card-block">
							    <h4 class="card-title">Card Flip</h4>
							    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" class="btn btn-primary">Go somewhere</a>
							  </div>
							</div>
						</div>
						<div class="back">
							<div class="card">
							  <div class="card-block">
							    <h4 class="card-title">Card Flip</h4>
							    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
							  </div>
							  <img data-src="holder.js/100px180/?text=Image" alt="Image [100%x180]" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;"/>
							  <div class="card-block">
							    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							    <a href="#" class="card-link">Card link</a>
							    <a href="#" class="card-link">Another link</a>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  );
};

export default DocCard;