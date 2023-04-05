class HeatingPlan {
    // ...

    withinRange(bottom, top) {
        return (
            bottom >= this._temperatureRange.low && top >= this._temperatureRange.high
        );
    }
}

let aPlan = new HeatingPlan();

const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const high = tempRange.high;
const isWithInRange = aPlan.withinRanage(low, high);
if (!isWithInRange) {
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}