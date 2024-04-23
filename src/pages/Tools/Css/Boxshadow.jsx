import React, { useState, useEffect } from "react";
import GeneratedCSS from "../../../components/CSS/GeneratedCSS";

function BoxShadow() {
    const [boxShadow, setBoxShadow] = useState({
        offsetX: 10,
        offsetY: 10,
        blurRadius: 5,
        spreadRadius: 2,
        color: "#fb923c",
        opacity: 100,
    });
    const [copySuccess, setCopySuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBoxShadow((prevState) => ({
            ...prevState,
            [name]: name === "color" ? value : name === "opacity" ? parseFloat(value) : parseInt(value),
        }));
    };

    const hexToRGBA = (hex, opacity) => {
        hex = hex.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
    };

    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => {
                setCopySuccess(false);
            }, 1250);

            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(`${result}`)
            .then(() => {
                setCopySuccess(true);
            })
            .catch(() => {
                setCopySuccess(false);
            });
    };

    const result = `box-shadow: ${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${hexToRGBA(boxShadow.color, boxShadow.opacity)};`;

    return (
        <div className="flex flex-col gap-7 p-6">
            <div>
                <h2 className="text-gray-700">A free CSS box-shadow generator with custom color, blur, spread, offset X, Y and opacity !!</h2>
            </div>
            <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
                <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 bg-white p-4 lg:w-2/4">
                    <div>
                        <h3 className="font-semibold text-gray-600">Settings :</h3>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>Offset X</p>
                                <p>{boxShadow.offsetX}</p>
                            </div>
                            <input className="w-full" type="range" name="offsetX" value={boxShadow.offsetX} min="-50" max="50" onChange={handleChange} />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>Offset Y</p>
                                <p>{boxShadow.offsetY}</p>
                            </div>
                            <input className="w-full" type="range" name="offsetY" value={boxShadow.offsetY} min="-50" max="50" onChange={handleChange} />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>Blur radius</p>
                                <p>{boxShadow.blurRadius}</p>
                            </div>
                            <input className="w-full" type="range" name="blurRadius" value={boxShadow.blurRadius} min="0" max="50" onChange={handleChange} />
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>Spread radius</p>
                                <p>{boxShadow.spreadRadius}</p>
                            </div>
                            <input className="w-full" type="range" name="spreadRadius" value={boxShadow.spreadRadius} min="0" max="50" onChange={handleChange} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Color</p>
                            <div className="mt-1 flex items-center gap-4">
                                <input className="h-12 w-16 appearance-none rounded-md border border-gray-300 p-2 focus:outline-none" type="color" value={boxShadow.color} onChange={handleChange} name="color" />
                                <input className="w-20 rounded-md px-2 py-2 caret-orange-400 outline-none focus:outline-orange-400" type="text" value={boxShadow.color} onChange={handleChange} name="color" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>Opacity</p>
                                <p>{boxShadow.opacity}%</p>
                            </div>
                            <input className="w-full" type="range" name="opacity" value={boxShadow.opacity} min="0" max="100" step="10" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="flex h-96 flex-col rounded-md border-2 border-gray-200 bg-white p-4 lg:h-full lg:w-2/4">
                    <div>
                        <h4 className="font-semibold text-gray-600">Preview :</h4>
                    </div>
                    <div className="flex h-full items-center justify-center rounded-md">
                        <div
                            className="h-48 w-2/3 rounded-md bg-gray-100 p-5 lg:w-6/12"
                            style={{
                                boxShadow: `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${hexToRGBA(boxShadow.color, boxShadow.opacity)}`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <GeneratedCSS result={result} copyToClipboard={copyToClipboard} copySuccess={copySuccess} />
        </div>
    );
}

export default BoxShadow;
