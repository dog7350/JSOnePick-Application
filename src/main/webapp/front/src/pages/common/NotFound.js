import '../../assets/css/common/error.css';

window.onload = () => {
	document.getElementById('headerContainer').innerHTML = '';
	document.getElementById('footerContainer').innerHTML = '';
}

const url = window.location.href;
const res = await fetch(url);

function NotFound() {
	return (
		<div id="NotFound">
			<div class="vc-container">
		        <div class="vc-content">
		            <h1 class="vc-heading">{res.status}</h1>
		            
		            <p class="vc-sub-heading">{url}</p>
		            
		            <p class="vc-sub-heading">
		            	<span class="blink-infinite">
		            		{res.statusText}
		            	</span>
		            </p>
		        </div>
		    </div>
		</div>
	);
}

export default NotFound;