var assert = require('power-assert');

describe('Array', function () {
    var ary;

    beforeEach(function () {
        ary = [1, 2, 3];
    });

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var zero = 0, two = 2;
            assert(ary.indexOf(zero) === two);
        });
        it('should return index when the value is present', function () {
            var minusOne = -1, two = 2;
            assert.ok(ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9tb2NoYV9ub2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHlwZXNjcmlwdF9tb2NoYV9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7O0FBRXBDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDZCxJQUFJLEdBQUc7O0lBRVAsVUFBVSxDQUFDO1FBQ1AsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDOztJQUVGLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDbkIsRUFBRSxDQUFDLGdEQUFnRCxFQUFFO1lBQ2pELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsRUFBRSxDQUFDLCtDQUErQyxFQUFFO1lBQ2hELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUUsOEJBQThCLENBQUM7UUFDNUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIn0=
