function areaOfFigures(input){
    let shape = input[0];
    let area = 0;
    if (shape === "square"){
        let side = Number(input[1]);
        area = side * side;
    } else if (shape === "rectangle"){
        let lenght = Number(input[1]);
        let weight = Number(input[2]);
        area = lenght * weight;
    }  else if (shape === "circle"){
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    }else if (shape === "triangle"){
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = (side * height) / 2;
    }
    console.log(area.toFixed(3))
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);
areaOfFigures(["triangle","5","7"])

