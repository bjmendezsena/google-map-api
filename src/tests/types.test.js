import {types} from '../types/types';

describe('Types tests', () => {

    test("Should be have 'addMarker' type", () => {
        expect(types).toEqual({
            addMarker:'[marker] Add marker'
        });
    });
});