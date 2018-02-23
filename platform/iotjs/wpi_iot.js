var Gpio = require('gpio'),
    gpio = new Gpio();

var gpio_dat; // A reference (handle) to gpio data pin
var gpio_clk; // A reference (handle) to gpioclock pin

var DAT = 23,
    CLK = 24;

function wpi_iot() {
  if (!(this instanceof wpi_iot)) {
    return new wpi_iot();
  }
}

wpi_iot.prototype.HIGH = 1;
wpi_iot.prototype.LOW = 0;
wpi_iot.prototype.OUTPUT = gpio.DIRECTION.OUT;

wpi_iot.prototype.pinMode = function pinMode(pin, mode) {
  if (pin == DAT) {
    gpio_dat = gpio.open({
      pin: DAT,
      direction: mode
    }, function(err) {
      if (err) {
        console.error(err);
      }
    });
  }
  else if (pin == CLK) {
    gpio_clk = gpio.open({
      pin: CLK,
      direction: mode
    }, function(err) {
      if (err) {
        console.error(err);
      }
    });
  }
};

wpi_iot.prototype.digitalWrite = function digitalWrite(pin, bit) {
  if (pin == DAT) {
    gpio_dat.write(bit);
  }
  else if (pin == CLK) {
    gpio_clk.write(bit);
  }
};

module.exports = wpi_iot;
