import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../Data/category';

const Header = ({ category, setCategory, word, setWord, LightTheme }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
            },
            type: LightTheme ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
        // setMeanings([]);
    };

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Header;