import * as L from 'leaflet';
import {Observable} from 'rxjs';

declare module 'leaflet' {
    namespace TileLayer {
        export class TileLayerWithHeaders extends TileLayer {
            constructor(
                baseUrl: string,
                // options: WMSOptions,
                header: { header: string; value: string }[],
                abort?: Observable<any>
            );
        }
        export function header(
            baseUrl: string,
            // options: WMSOptions,
            header: { header: string; value: string }[],
            abort?: Observable<any>
        ): L.TileLayer.TileLayerWithHeaders;
    }
}