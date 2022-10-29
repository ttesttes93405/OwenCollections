import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, } = createStitches({
    media: {
        s: '(max-width: 576px)',
        l: '(min-width: 576px)',
    },
    utils: {
        size: (value) => {
            return Array.isArray(value) ? ({
                width: value[0],
                height: value[1],
            }) : ({
                width: value,
                height: value,
            })
        },
        margins: (value) => {
            const units = value.map(v => Number.isInteger(v) ? `${v}px` : v);
            return ({
                margin: units.join(' '),
            });
        },
        paddings: (value) => {
            const units = value.map(v => Number.isInteger(v) ? `${v}px` : v);
            return ({
                padding: units.join(' '),
            });
        }

    },
});