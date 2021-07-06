var ripple = {
    install(Vue){
        Vue.directive('ripple',{
            bind:function(el,binding){
                el.style.overflow ='hidden';
                el.addEventListener('click',function(e) {
                    let ripple;
                    let parent = this;
                    if ((ripple = parent.querySelector(".ripple")) !== null) {
                        parent.removeChild(ripple);
                    }
                    ripple = document.createElement("span");
                    ripple.classList.add("ripple");
                    
                    ripple.style.cssText = 'display: block;position: absolute;background: '+binding.value+';opacity: 0.5;border-radius: 50%;transform: scale(0);transition: all 0.7s ease-in;';
                    parent.appendChild(ripple);
                    if (!ripple.style.width && !ripple.style.height) {
                        var d = Math.max(parent.offsetWidth, parent.offsetWidth);
                        ripple.style.width = d + "px";
                        ripple.style.height = d + "px";
                    }
                    let x = e.pageX - getOffset(parent).left - ripple.clientWidth / 2;
                    let y = e.pageY - getOffset(parent).top - ripple.clientHeight / 2;

                    ripple.style.top = y + "px";
                    ripple.style.left = x + "px";
                    ripple.style.opacity = '0';
                    ripple.style.transform = 'scale(2.5)';
                });
            }
        })
    }
}

function getOffset(el) {
	el = el.getBoundingClientRect();
	return {
		left: el.left + window.scrollX,
		top: el.top + window.scrollY
	}
}
export default ripple;