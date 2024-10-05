import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ThemedCard() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="card" data-bs-theme={theme}>
            <div className="card-header">Themed card</div>
            <div className="card-body">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="toggleThemeSwitch"
                        onChange={toggleTheme}
                    ></input>
                    <label className="form-check-label" for="toggleThemeSwitch">
                        Dark mode
                    </label>
                </div>
            </div>
        </div>
    );
}
