// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
}

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: 'Redmi K30S 至尊纪念版',
			image: '/images/device/redmi_k30s_ultra.webp',
			specs: 'Black / 8G + 128GB',
			description: '6.67-inch LCD FHD+ display, 144Hz refresh rate.',
			link: 'https://www.mi.com/redmik30s',
		},
	],
	Router: [
		{
			name: 'GL-MT3000',
			image: '/images/device/mt3000.webp',
			specs: '1000Mbps / 2.5G',
			description:
				'Portable WiFi 6 router suitable for business trips and home use.',
			link: 'https://www.gl-inet.cn/products/gl-mt3000/',
		},
	],
}
