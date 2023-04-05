class HeatingPlan {
    // ...

    xxNewwithinRanage(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithInRange = this.withinRanage(low, high);
        return isWithInRange;
    }
}

let aPlan = new HeatingPlan();

const tempRange = aRoom.daysTempRange;
const isWithInRange = aPlan.xxNewwithinRanage(aPlan, tempRange);
if (!isWithInRange) {
    alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}
