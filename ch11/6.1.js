class HeatingPlain {
    get targetTemperature() {
        const selectedTemperature = thermostat.selectedTemperature;
        return this.xxNEWtargenTemperature(selectedTemperature)
    }

    xxNEWtargenTemperature(selectedTemperature) {
        if (selectedTemperature> this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

let thePlan = new HeatingPlain();

if      (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();