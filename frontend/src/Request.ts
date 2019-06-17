namespace FlatApp {

    function replace(s: string, from: string, to: string) : string {
        do {
            s = s.replace(from, to);
        } while (s.indexOf(from)!=-1);
        return s;
    }

    export function Request(obj: any) {
        
        console.log({reg:obj});
        
        return new Promise(resolve => {
            let url = "http://10.50.192.251:80?"
            const names = Object.getOwnPropertyNames(obj).sort((a,b)=>{
                if (a=="method") {
                    return -1;
                } else if (b=="method") {
                    return 1;
                } else {
                    return 0;
                }
            });
            for(let i=0;i!=names.length;i++){
                url += names[i]+"="+obj[names[i]]+"&";
            }
            url = url.slice(0,url.length-1);
            
            const request = new XMLHttpRequest();
            request.onerror = function(){
                console.log({fail:url});
                resolve({success: false});
            }
            request.onload = function(){
                if(request.status == 200){

                    let text = request.responseText;

                    
                    if(text.indexOf('AttributeDict')!=-1){

                        const parsed = JSON.parse(text);

                        let str = parsed.buildings;
                        str = str.replace(",AttributeDict(",'');
                        str = str.slice(0,str.length-1);

                        let arr = str.split("}{");
                        for(let i=0;i!=arr.length;i++){
                            arr[i]+="},";
                        }

                        arr[arr.length-1] = arr[arr.length-1].slice(0,arr.length-3);

                        arr = arr.join('');

                        arr = replace(arr,"),AttributeDict(\")",",");
                        arr = replace(arr,"),AttributeDict(",",");
                        arr = replace(arr, "'", "\"");
                        arr = replace(arr, "\"false\"","false");
                        arr = replace(arr, "\"true\"","true");
                        arr = "{\"buildings\":["+arr+"],\"success\": true}"

                        function fixbStatus(index){
                            switch(index){
                                case 0:
                                    return "free";
                                case 1:
                                    return "rental"
                                case 2:
                                    return "sell"
                                case 3:
                                    return "present"
                                case 4:
                                    return "inRental"
                            }
                        } 

                        function enumBuildingTypeConvertorOut(index){
                            if(index == 0){
                                return "residental";
                            } else {
                                return "notResidental"
                            }
                        }

                        let tmp = JSON.parse(arr);

                        for(let i=0;i!=tmp.buildings.length;i++){
                            tmp.buildings[i].bStatus = fixbStatus(tmp.buildings[i].bStatus);
                            tmp.buildings[i].bType = enumBuildingTypeConvertorOut(tmp.buildings[i].bType);
                        }

                        console.log({fix: tmp})
                        resolve(tmp);
                        return;
                    } 

                    if(text.indexOf('buildings')!=-1){
                        text = replace(text,'\"[',"[");
                        text = replace(text,']\"',"]");
                    }

                    text = replace(text,"}{","},{")
                    text = replace(text,"} {","},{")

                    text = replace(text, '\\' + "\"" , "\"")
                    text = replace(text, "'", "\"");
                    text = replace(text, "\"false\"","false");
                    text = replace(text, "\"true\"","true");
                    text = replace(text, "%20", " ");

                    const res = JSON.parse(text);
                    const props = Object.getOwnPropertyNames(res);
                    for(let i=0;i!=props.length;i++){
                        const value = res[props[i]];
                        if(value%1000000000000000000==0){
                            res[props[i]] = res[props[i]] / 1000000000000000000;
                        }
                    }

                    console.log({res})
                    resolve(res);
                }
            }
            request.open("GET", url);
            request.send(null);
        });
    }

    export function RequestWithCallback(obj,callback){
        Request(obj).then(result=>callback(result));
    }
}