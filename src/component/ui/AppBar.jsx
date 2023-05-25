import "./app-bar.scss";

const AppBar = ({width}) => {

    const designWidth = 414.0;
    const designHeight = 70.0;

    const adjustment = (width - designWidth) / designWidth;

    const viewBoxWidth = 1 + adjustment;
    const viewBoxHeight = 0.1691;
    const curveRadius = 0.0365;

    const arc1 =
        {dx1: 0.8895 + adjustment, dy1: 0, dx2: 0.8816 + adjustment, dy2: 0.0083, dx: 0.8794 + adjustment, dy: 0.0181};

    const arc2 =
        {
            dx1: 0.8708 + adjustment,
            dy1: 0.0576,
            dx2: 0.8346 + adjustment,
            dy2: 0.0872,
            dx: 0.7914 + adjustment,
            dy: 0.0872
        };

    const arc3 =
        {
            dx1: 0.7481 + adjustment,
            dy1: 0.0872,
            dx2: 0.7119 + adjustment,
            dy2: 0.0576,
            dx: 0.7033 + adjustment,
            dy: 0.0181
        };

    const arc4 =
        {dx1: 0.7012 + adjustment, dy1: 0.0083, dx2: 0.6932 + adjustment, dy2: 0, dx: 0.6831 + adjustment, dy: 0};

    const H1 = 0.8996 + adjustment;

    return (
        <svg
            width={width}
            height={designHeight}
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            version="1.1"
            className="app-bar"
            xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <g>
                <path
                    style={{fill: "#ffffff", fillOpacity: 1, strokeWidth: 0.0713198, stopColor: "#000000"}}
                    d={`
                    M 0,${curveRadius} 
                    V ${viewBoxHeight} 
                    H ${viewBoxWidth} 
                    V ${curveRadius} 
                    a ${curveRadius},${curveRadius} 45 0 0 -${curveRadius},-${curveRadius} 
                    H ${H1} 
                    C ${arc1.dx1},${arc1.dy1} ${arc1.dx2},${arc1.dy2} ${arc1.dx},${arc1.dy} 
                    C ${arc2.dx1},${arc2.dy1} ${arc2.dx2},${arc2.dy2} ${arc2.dx},${arc2.dy}
                    C ${arc3.dx1},${arc3.dy1} ${arc3.dx2},${arc3.dy2} ${arc3.dx},${arc3.dy}
                    C ${arc4.dx1},${arc4.dy1} ${arc4.dx2},${arc4.dy2} ${arc4.dx},${arc4.dy}
                    H ${curveRadius} 
                    A ${curveRadius},${curveRadius} 135 0 0 0,${curveRadius} Z`}/>
            </g>
        </svg>
    );
};

export default AppBar;