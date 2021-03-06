"use strict";
function presenceBatch(_a) {
    var _b = (_a === void 0 ? {} : _a).timeout, timeout = _b === void 0 ? 150 : _b;
    return function (client) {
        var batch = [], batchTimeout;
        client.on('presence_change', function (presence) {
            clearTimeout(batchTimeout), batchTimeout = null;
            batch.push(presence);
            batchTimeout = setTimeout(publish, timeout);
        });
        function publish() {
            var data;
            data = batch, batch = [];
            client.emit('presence_change:batch', data);
        }
    };
}
exports.presenceBatch = presenceBatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UtYmF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5zaW9ucy9wcmVzZW5jZS1iYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsdUJBQThCLEVBQTBDO1FBQXpDLHNDQUFhLEVBQWIsa0NBQWE7SUFDeEMsTUFBTSxDQUFDLFVBQUMsTUFBYztRQUNsQixJQUFJLEtBQUssR0FBcUIsRUFBRSxFQUM1QixZQUFpQixDQUFDO1FBRXRCLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxRQUFRO1lBQ2xDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckIsWUFBWSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSDtZQUNJLElBQUksSUFBc0IsQ0FBQztZQUMzQixJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWpCZSxxQkFBYSxnQkFpQjVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0IHtDbGllbnR9IGZyb20gJy4uL2NsaWVudCc7XG5pbXBvcnQge1ByZXNlbmNlQ2hhbmdlfSBmcm9tICcuLi9pbnRlcmZhY2VzLmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNlbmNlQmF0Y2hPcHRpb25zIHtcbiAgICB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2VuY2VCYXRjaCh7dGltZW91dCA9IDE1MH06IFByZXNlbmNlQmF0Y2hPcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gKGNsaWVudDogQ2xpZW50KSA9PiB7XG4gICAgICAgIHZhciBiYXRjaDogUHJlc2VuY2VDaGFuZ2VbXSA9IFtdLFxuICAgICAgICAgICAgYmF0Y2hUaW1lb3V0OiBhbnk7XG5cbiAgICAgICAgY2xpZW50Lm9uKCdwcmVzZW5jZV9jaGFuZ2UnLCAocHJlc2VuY2UpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChiYXRjaFRpbWVvdXQpLCBiYXRjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgYmF0Y2gucHVzaChwcmVzZW5jZSk7XG4gICAgICAgICAgICBiYXRjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KHB1Ymxpc2gsIHRpbWVvdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICAgICAgICAgICAgdmFyIGRhdGE6IFByZXNlbmNlQ2hhbmdlW107XG4gICAgICAgICAgICBkYXRhID0gYmF0Y2gsIGJhdGNoID0gW107XG4gICAgICAgICAgICBjbGllbnQuZW1pdCgncHJlc2VuY2VfY2hhbmdlOmJhdGNoJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl19