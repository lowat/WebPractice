'use strict';
/*
const in_lambda_form = document.getElementById("input_lambda_form");
const out_lambda_form = document.getElementById("out_lambda_form");
const in_theta_input = document.getElementById("in_theta");
const out_theta_text = document.getElementById("out_theta_text");*/

const element_standards = new Map([
    [
        "cu", 1.5406
    ],
    [
        "mo", 0.7093
    ],
    [
        "co", 1.7890007
    ],
    [
        "cr", 2.2897
    ],
    [
        "ag", 0.559400
    ],
    [
        "fe", 1.936040
    ],
]);

class InvalidThetaError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidThetaError";
    }
};

function getElementStandardValue(element_symbol) {
    return element_standards.get(element_symbol);
};

function calcOutputTheta(in_theta = 43.3484, in_lambda = 1.5406, out_lambda = 0.7093) {
    if (typeof in_theta !== "number" || (in_theta <= 0) || (in_theta >= 180)) {
        throw new InvalidThetaError("Theta (Input Angle) must be valid number between 0 and 180 degrees.");
    } else {
        const ans_one = in_lambda / (2 * Math.sin(toRadians(in_theta)));
        const ans_two = out_lambda / (2 * ans_one);
        const outputTheta = Math.asin(ans_two) * 180 / Math.PI
        return Number(outputTheta.toFixed(4));
    }
};

function toRadians(angle) {
    return angle * (Math.PI / 180);
};

function toDegrees(angle) {
    return angle * (180 / Math.PI);
};

function get

module.exports = {
    getElementStandardValue,
    InvalidThetaError,
    calcOutputTheta,
    toRadians,
    toDegrees
};
