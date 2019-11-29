import React from 'react';
import TestRenderer from 'react-test-renderer'
import Timer from "./Timer";

describe('Time', () => {
    it("renders 'bleu' when time is > 20", () => {
        const testRenderer = TestRenderer.create(<Timer seconds={50} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({ className: "bleu" })).toBeTruthy();
    });
    it("renders 'orange' when time is >=12 && < 20", () => {
        const testRenderer = TestRenderer.create(<Timer seconds={15} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({ className: "orange" })).toBeTruthy();
    });
    it("renders 'rouge' when time is < 10", () => {
        const testRenderer = TestRenderer.create(<Timer seconds={10} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({ className: "rouge" })).toBeTruthy();
    });
})