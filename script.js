let display = document.querySelector(".screen");

let show = function(num,repFun){
    if (num !== 0){
        display.innerText = `${num}`;
        setTimeout(repFun,1000);
    }else{
        display.innerText = `HAPPY INDEPENDENCE DAY`;
    }
}

show(10,()=>{
    show(9,()=>{
        show(8,()=>{
            show(7,()=>{
                show(6,()=>{
                    show(5,()=>{
                        show(4,()=>{
                            show(3,()=>{
                                show(2,()=>{
                                    show(1,()=>{
                                        show(0,()=>{

                                        });
                                    });
                                });
                            });
                        });
                    });
                })
            });
        });
    });
});

