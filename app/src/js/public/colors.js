import {useSelector} from "react-redux";

export const THEME = {
        L: "LIGHT",
        D: "DARK"
}

export function GET_COLOR() {
        const isTheme = useSelector(state => state.Statics, []).isTheme.data
        console.log("TEST SUCCESS" , JSON.stringify(isTheme))
        return COLORS[`${isTheme ? THEME.D : THEME.L}`]
}

const COLORS = {
        DARK: {
                BACKGROUND_COLOR: "#19181A",
                fg1: "#26252B",
                fg2: "#3C3B40",
                PRIMARY: "#FFFFFF",
                SECONDARY: "#F3F3F8",
                SUCCESS: "#BB86FC",
                DANGER: "#DD3544",
                WARNING: "#FFC106",
                INFO: "#14A3B8"
        },
        LIGHT: {
                BACKGROUND_COLOR: "#F4F2F7",
                fg1: "#FFFFFF",
                fg2: "#F9F9F9",
                PRIMARY: "#27252C",
                SECONDARY: "#8A898E",
                SUCCESS: "#28A744",
                DANGER: "#DD3544",
                WARNING: "#FFC106",
                INFO: "#14A3B8"
        }
}

export const RandomColor =
    [
        {name: 'TURQUOISE', code: '#1abc9c'},
        {name: 'EMERALD', code: '#2ecc71'},
        {name: 'PETER RIVER', code: '#3498db'},
        {name: 'AMETHYST', code: '#9b59b6'},
        {name: 'WET ASPHALT', code: '#34495e'},
        {name: 'GREEN SEA', code: '#16a085'},
        {name: 'NEPHRITIS', code: '#27ae60'},
        {name: 'BELIZE HOLE', code: '#2980b9'},
        {name: 'WISTERIA', code: '#8e44ad'},
        {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
        {name: 'SUN FLOWER', code: '#f1c40f'},
        {name: 'CARROT', code: '#e67e22'},
        {name: 'ALIZARIN', code: '#e74c3c'},
        {name: 'CLOUDS', code: '#ecf0f1'},
        {name: 'CONCRETE', code: '#95a5a6'},
        {name: 'ORANGE', code: '#f39c12'},
        {name: 'PUMPKIN', code: '#d35400'},
        {name: 'POMEGRANATE', code: '#c0392b'},
        {name: 'SILVER', code: '#bdc3c7'},
        {name: 'ASBESTOS', code: '#7f8c8d'},
    ]
