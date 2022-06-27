package com.reactnativeclock;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.bluetooth.BluetoothAdapter;

@ReactModule(name = ClockModule.NAME)
public class ClockModule extends ReactContextBaseJavaModule {
    public static final String NAME = "Clock";
    private ReactApplicationContext mContext;

    public ClockModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void multiply(int a, int b, Promise promise) {
        promise.resolve(a * b);
    }

    public static native int nativeMultiply(int a, int b);

    @ReactMethod
    public void isTimeAutomatic(Promise promise) {
       promise.resolve(android.provider.Settings.Global.getInt(mContext.getApplicationContext().getContentResolver(), android.provider.Settings.Global.AUTO_TIME, 0));
    } 

    public static native int nativeIsTimeAutomatic();

    @ReactMethod
    public void isBluetoothEnabled(Promise promise) {
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        promise.resolve(mBluetoothAdapter.isEnabled());
    }

    public static native int nativeIsBluetoothEnabled();
}
