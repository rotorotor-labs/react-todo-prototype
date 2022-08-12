import React from 'react';

export function Progress(props) {
 return(
    <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold">{props.label}</h3>
            <p className="text-sm">{props.percentage}%</p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={`${props.label.toLowerCase() === "completed" ? "bg-leaf-500" : "bg-dentist-600" } h-2.5 rounded-full transition-all`} style={ {width: `${props.percentage}%`} }></div>
        </div>
    </div>
 )

}