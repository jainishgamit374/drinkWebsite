import React, { useState } from "react";

const Athlete = ({ data , mover, id }) => {
    const { name, description, img } = data;

    return (
        <>
            <div onMouseEnter={() => mover(id)} className="product relative h-[40vh] hover:h-[41vh] w-full duration-500 ease-expo">
                <img className="absolute top-0 left-0 opacity-0 duration-[inherit] ease-[inherit] h-full w-full object-cover" src={img} alt="" />
                <div className="relative z-2 h-full max-w-screen-xl mx-auto flex justify-between items-center pr-14 border-t-2">
                    <h1 className="text-4xl capitalize font-medium monument">{name}</h1>
                    <div className="w-[30%]">
                        <p className="text-lg leading-1 mb-4 monument">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Athlete;