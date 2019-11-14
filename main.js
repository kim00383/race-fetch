   //we want to fetch multiple things
        //or multiple copies of the same thing
        let log = console.log;
        
        let datafile1 = fetch('https://jsonbox.io/box_7ebd8cb0b8fb187873ef');
        let datafile2 = fetch('https://jsonbox.io/box_82b5a4aa7a4a71abaa80');
        
        Promise.all([datafile1, datafile2])
        .then( files =>{
            files.forEach(file=>{
                process( file.json() );
            })
            //files[0].json()
            //files[1].json()
        })
        .catch(err=>{
            console.log(err);
        });
        
        let process = (prom) =>{
            prom.then(data=>{
               
                let jsonType=data[0].type;
                let h3=document.createElement('h3');
                document.getElementById('output').appendChild(h3);
                data[0].data.forEach(items=>{
                    
                    h3.textContent=jsonType;
                    let p = document.createElement('p');
                    
                        for(x in items){
                            let span=document.createElement('span');
                            if(jsonType=="The Big Lebowski"){
                            p.className="pCharater"
                            span.className="spanCharater"+x;
                         
                            }
                            else{
                                p.className="pActor"
                                span.className="spanActor"+x;
                            }
                            span.textContent=(x+":"+items[x]);
                            p.appendChild(span);
                        };
                        p.addEventListener("mouseover",function(){
                            this.classList.add("bounce","animated");
                        });
                        p.addEventListener("mouseout",function(){
                            this.classList.remove("bounce","animated")
                        });
                       
                     document.getElementById('output').appendChild(p);
                
                })
              

             
            })
        }