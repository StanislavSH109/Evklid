document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.btn-tab').forEach(function(tabsBtn) {
    
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.step-information').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')
             })

        
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

    
        }) 
    })
})


