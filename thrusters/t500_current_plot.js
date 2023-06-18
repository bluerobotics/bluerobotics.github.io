// Our labels along the x-axis
var pwm_value = [1100, 1104, 1108, 1112, 1116, 1120, 1124, 1128, 1132, 1136, 1140, 1144, 1148, 1152, 1156, 1160, 1164, 1168, 1172, 1176, 1180, 1184, 1188, 1192, 1196, 1200, 1204, 1208, 1212, 1216, 1220, 1224, 1228, 1232, 1236, 1240, 1244, 1248, 1252, 1256, 1260, 1264, 1268, 1272, 1276, 1280, 1284, 1288, 1292, 1296, 1300, 1304, 1308, 1312, 1316, 1320, 1324, 1328, 1332, 1336, 1340, 1344, 1348, 1352, 1356, 1360, 1364, 1368, 1372, 1376, 1380, 1384, 1388, 1392, 1396, 1400, 1404, 1408, 1412, 1416, 1420, 1424, 1428, 1432, 1436, 1440, 1444, 1448, 1452, 1456, 1460, 1464, 1468, 1472, 1476, 1480, 1484, 1488, 1492, 1496, 1500, 1504, 1508, 1512, 1516, 1520, 1524, 1528, 1532, 1536, 1540, 1544, 1548, 1552, 1556, 1560, 1564, 1568, 1572, 1576, 1580, 1584, 1588, 1592, 1596, 1600, 1604, 1608, 1612, 1616, 1620, 1624, 1628, 1632, 1636, 1640, 1644, 1648, 1652, 1656, 1660, 1664, 1668, 1672, 1676, 1680, 1684, 1688, 1692, 1696, 1700, 1704, 1708, 1712, 1716, 1720, 1724, 1728, 1732, 1736, 1740, 1744, 1748, 1752, 1756, 1760, 1764, 1768, 1772, 1776, 1780, 1784, 1788, 1792, 1796, 1800, 1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880, 1884, 1888, 1892, 1896, 1900]

var current_draw_12v = [14.84, 14.54, 14.25, 13.96, 13.67, 13.38, 13.09, 12.79, 12.5, 12.22, 11.93, 11.68, 11.41, 11.12, 10.82, 10.53, 10.24, 9.96, 9.69, 9.43, 9.19, 8.94, 8.7, 8.46, 8.21, 7.96, 7.71, 7.47, 7.24, 7.01, 6.79, 6.59, 6.38, 6.18, 5.98, 5.79, 5.59, 5.41, 5.22, 5.04, 4.85, 4.68, 4.52, 4.38, 4.23, 4.09, 3.94, 3.8, 3.67, 3.53, 3.39, 3.25, 3.12, 2.99, 2.87, 2.75, 2.63, 2.52, 2.4, 2.29, 2.16, 2.04, 1.92, 1.8, 1.7, 1.6, 1.51, 1.42, 1.34, 1.26, 1.18, 1.1, 1.03, 0.96, 0.9, 0.83, 0.77, 0.73, 0.69, 0.64, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.26, 0.21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21, 0.27, 0.32, 0.38, 0.43, 0.48, 0.54, 0.59, 0.64, 0.7, 0.76, 0.81, 0.88, 0.95, 1.02, 1.09, 1.17, 1.26, 1.35, 1.43, 1.52, 1.62, 1.72, 1.82, 1.93, 2.04, 2.16, 2.28, 2.41, 2.54, 2.66, 2.77, 2.9, 3.02, 3.17, 3.32, 3.46, 3.6, 3.74, 3.89, 4.03, 4.18, 4.33, 4.5, 4.67, 4.83, 4.99, 5.16, 5.35, 5.54, 5.74, 5.93, 6.12, 6.32, 6.53, 6.75, 6.97, 7.19, 7.41, 7.64, 7.87, 8.11, 8.37, 8.64, 8.91, 9.18, 9.45, 9.71, 9.98, 10.25, 10.54, 10.84, 11.13, 11.45, 11.77, 12.09, 12.41, 12.71, 12.97, 13.28, 13.58, 13.89, 14.21, 14.52, 14.83, 15.14, 15.45, 15.76, 16.07]

var current_draw_14v = [18.3, 17.95, 17.6, 17.25, 16.89, 16.54, 16.19, 15.84, 15.48, 15.12, 14.79, 14.47, 14.13, 13.78, 13.41, 13.04, 12.68, 12.34, 12.0, 11.68, 11.37, 11.06, 10.76, 10.46, 10.15, 9.85, 9.56, 9.27, 8.98, 8.7, 8.44, 8.19, 7.94, 7.69, 7.45, 7.21, 6.97, 6.74, 6.5, 6.28, 6.05, 5.83, 5.63, 5.45, 5.27, 5.09, 4.92, 4.74, 4.57, 4.41, 4.25, 4.08, 3.93, 3.77, 3.63, 3.49, 3.35, 3.21, 3.08, 2.94, 2.8, 2.66, 2.52, 2.38, 2.25, 2.13, 2.01, 1.89, 1.78, 1.67, 1.57, 1.48, 1.38, 1.29, 1.2, 1.11, 1.03, 0.95, 0.88, 0.81, 0.75, 0.69, 0.63, 0.57, 0.51, 0.45, 0.4, 0.34, 0.28, 0.22, 0.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13, 0.2, 0.27, 0.34, 0.41, 0.47, 0.54, 0.61, 0.68, 0.75, 0.82, 0.87, 0.94, 1.01, 1.08, 1.16, 1.25, 1.35, 1.45, 1.56, 1.67, 1.78, 1.9, 2.01, 2.14, 2.27, 2.4, 2.54, 2.7, 2.87, 3.04, 3.19, 3.36, 3.52, 3.68, 3.83, 3.98, 4.14, 4.31, 4.47, 4.65, 4.83, 5.0, 5.19, 5.38, 5.57, 5.76, 5.96, 6.17, 6.38, 6.6, 6.84, 7.09, 7.33, 7.59, 7.85, 8.12, 8.39, 8.66, 8.93, 9.21, 9.5, 9.79, 10.11, 10.42, 10.74, 11.06, 11.39, 11.71, 12.03, 12.36, 12.68, 13.03, 13.39, 13.75, 14.12, 14.51, 14.9, 15.27, 15.64, 15.97, 16.34, 16.71, 17.09, 17.48, 17.86, 18.24, 18.62, 19.0, 19.38, 19.76]

var current_draw_16v = [22.39, 21.96, 21.52, 21.09, 20.65, 20.22, 19.78, 19.35, 18.91, 18.48, 18.05, 17.65, 17.23, 16.79, 16.34, 15.89, 15.46, 15.05, 14.64, 14.24, 13.87, 13.5, 13.13, 12.76, 12.38, 12.02, 11.66, 11.3, 10.96, 10.62, 10.3, 9.99, 9.69, 9.39, 9.09, 8.8, 8.51, 8.22, 7.93, 7.68, 7.43, 7.17, 6.95, 6.73, 6.5, 6.29, 6.08, 5.87, 5.67, 5.47, 5.27, 5.07, 4.88, 4.69, 4.52, 4.35, 4.15, 3.95, 3.77, 3.57, 3.37, 3.19, 3.02, 2.86, 2.7, 2.55, 2.4, 2.27, 2.13, 2.0, 1.88, 1.76, 1.64, 1.53, 1.43, 1.34, 1.26, 1.18, 1.1, 1.01, 0.93, 0.86, 0.78, 0.71, 0.65, 0.58, 0.51, 0.44, 0.37, 0.3, 0.23, 0.17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16, 0.23, 0.31, 0.38, 0.46, 0.53, 0.61, 0.68, 0.76, 0.83, 0.91, 1.0, 1.08, 1.18, 1.28, 1.39, 1.51, 1.63, 1.75, 1.89, 2.02, 2.15, 2.29, 2.44, 2.58, 2.73, 2.89, 3.06, 3.23, 3.4, 3.58, 3.77, 3.96, 4.15, 4.34, 4.54, 4.72, 4.9, 5.08, 5.28, 5.48, 5.69, 5.9, 6.11, 6.34, 6.57, 6.8, 7.03, 7.27, 7.51, 7.75, 8.01, 8.27, 8.57, 8.87, 9.17, 9.48, 9.8, 10.12, 10.44, 10.77, 11.09, 11.43, 11.78, 12.14, 12.51, 12.89, 13.28, 13.67, 14.06, 14.43, 14.82, 15.21, 15.62, 16.05, 16.48, 16.92, 17.38, 17.84, 18.29, 18.73, 19.14, 19.55, 20.0, 20.45, 20.89, 21.34, 21.78, 22.23, 22.67, 23.12, 23.56]

var current_draw_18v = [26.57, 26.05, 25.54, 25.02, 24.5, 23.98, 23.46, 22.94, 22.42, 21.91, 21.39, 20.93, 20.44, 19.93, 19.39, 18.86, 18.35, 17.86, 17.37, 16.91, 16.47, 16.03, 15.59, 15.16, 14.72, 14.29, 13.86, 13.44, 13.03, 12.63, 12.24, 11.87, 11.51, 11.15, 10.79, 10.44, 10.09, 9.75, 9.42, 9.09, 8.77, 8.45, 8.15, 7.87, 7.61, 7.35, 7.1, 6.85, 6.61, 6.38, 6.15, 5.92, 5.7, 5.48, 5.28, 5.08, 4.88, 4.68, 4.5, 4.32, 4.14, 3.94, 3.74, 3.55, 3.36, 3.18, 3.0, 2.83, 2.67, 2.51, 2.36, 2.22, 2.07, 1.93, 1.8, 1.66, 1.54, 1.42, 1.31, 1.21, 1.11, 1.02, 0.94, 0.85, 0.77, 0.69, 0.61, 0.54, 0.46, 0.38, 0.31, 0.23, 0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14, 0.23, 0.32, 0.4, 0.49, 0.58, 0.66, 0.75, 0.84, 0.92, 1.02, 1.11, 1.22, 1.33, 1.45, 1.57, 1.7, 1.83, 1.98, 2.13, 2.28, 2.44, 2.59, 2.75, 2.92, 3.1, 3.27, 3.46, 3.66, 3.86, 4.06, 4.25, 4.43, 4.62, 4.82, 5.01, 5.22, 5.44, 5.66, 5.88, 6.12, 6.36, 6.6, 6.86, 7.11, 7.38, 7.65, 7.92, 8.22, 8.54, 8.85, 9.17, 9.51, 9.85, 10.19, 10.55, 10.91, 11.27, 11.65, 12.02, 12.41, 12.78, 13.16, 13.57, 13.99, 14.42, 14.86, 15.31, 15.75, 16.19, 16.64, 17.08, 17.54, 17.99, 18.47, 18.96, 19.47, 19.98, 20.52, 21.07, 21.59, 22.09, 22.57, 23.05, 23.57, 24.1, 24.62, 25.15, 25.68, 26.2, 26.73, 27.26, 27.78]

var current_draw_20v = [31.1, 30.49, 29.88, 29.27, 28.67, 28.06, 27.45, 26.85, 26.24, 25.64, 25.06, 24.51, 23.92, 23.31, 22.68, 22.07, 21.48, 20.89, 20.32, 19.77, 19.26, 18.74, 18.23, 17.72, 17.21, 16.71, 16.2, 15.71, 15.24, 14.78, 14.33, 13.9, 13.48, 13.06, 12.64, 12.23, 11.83, 11.42, 11.02, 10.63, 10.26, 9.89, 9.54, 9.21, 8.87, 8.54, 8.24, 7.95, 7.66, 7.39, 7.11, 6.84, 6.59, 6.33, 6.1, 5.88, 5.65, 5.42, 5.21, 4.99, 4.79, 4.58, 4.38, 4.16, 3.94, 3.73, 3.53, 3.33, 3.15, 2.97, 2.79, 2.62, 2.45, 2.29, 2.13, 1.97, 1.83, 1.69, 1.56, 1.44, 1.32, 1.21, 1.1, 1.01, 0.91, 0.82, 0.73, 0.64, 0.54, 0.45, 0.36, 0.27, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.19, 0.28, 0.38, 0.47, 0.56, 0.65, 0.75, 0.84, 0.94, 1.05, 1.16, 1.28, 1.4, 1.53, 1.67, 1.82, 1.98, 2.15, 2.36, 2.55, 2.74, 2.94, 3.13, 3.33, 3.54, 3.76, 3.85, 3.98, 4.21, 4.46, 4.71, 4.96, 5.22, 5.49, 5.72, 5.99, 6.26, 6.5, 6.75, 7.01, 7.28, 7.59, 7.91, 8.21, 8.5, 8.8, 9.11, 9.42, 9.74, 10.07, 10.39, 10.76, 11.12, 11.49, 11.9, 12.3, 12.72, 13.13, 13.53, 13.94, 14.37, 14.8, 15.25, 15.72, 16.2, 16.68, 17.17, 17.68, 18.18, 18.69, 19.2, 19.71, 20.23, 20.77, 21.29, 21.86, 22.44, 23.04, 23.64, 24.26, 24.86, 25.44, 26.0, 26.56, 27.17, 27.77, 28.38, 28.99, 29.59, 30.2, 30.81, 31.41, 32.02]

var current_draw_22v = [35.9, 35.2, 34.51, 33.81, 33.12, 32.43, 31.73, 31.04, 30.34, 29.66, 28.97, 28.35, 27.67, 26.98, 26.25, 25.54, 24.84, 24.18, 23.52, 22.88, 22.28, 21.66, 21.07, 20.48, 19.87, 19.28, 18.69, 18.12, 17.56, 17.02, 16.49, 16.0, 15.52, 15.07, 14.62, 14.15, 13.73, 13.31, 12.92, 12.52, 12.12, 11.74, 11.37, 11.01, 10.65, 10.31, 9.97, 9.63, 9.3, 8.97, 8.62, 8.27, 7.97, 7.63, 7.3, 6.99, 6.68, 6.39, 6.11, 5.83, 5.56, 5.3, 5.04, 4.78, 4.54, 4.28, 4.03, 3.78, 3.54, 3.31, 3.09, 2.88, 2.67, 2.47, 2.36, 2.28, 2.09, 1.92, 1.75, 1.6, 1.45, 1.3, 1.18, 1.06, 0.96, 0.88, 0.8, 0.72, 0.64, 0.56, 0.49, 0.41, 0.33, 0.25, 0.17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.3, 0.4, 0.51, 0.61, 0.71, 0.81, 0.92, 1.03, 1.14, 1.26, 1.4, 1.53, 1.68, 1.82, 1.98, 2.15, 2.33, 2.51, 2.7, 2.9, 3.09, 3.3, 3.51, 3.73, 3.95, 4.18, 4.42, 4.66, 4.92, 5.18, 5.46, 5.74, 6.02, 6.28, 6.55, 6.81, 7.08, 7.37, 7.65, 7.95, 8.27, 8.59, 8.92, 9.26, 9.6, 9.95, 10.31, 10.67, 11.05, 11.42, 11.83, 12.25, 12.7, 13.16, 13.62, 14.1, 14.58, 15.06, 15.56, 16.05, 16.55, 17.05, 17.56, 18.09, 18.64, 19.21, 19.79, 20.38, 20.99, 21.6, 22.2, 22.79, 23.41, 24.01, 24.66, 25.33, 26.0, 26.7, 27.42, 28.14, 28.84, 29.51, 30.14, 30.84, 31.52, 32.21, 32.91, 33.61, 34.3, 35.0, 35.7, 36.39, 37.09]

var current_draw_24v = [40.96, 40.17, 39.38, 38.59, 37.8, 37.01, 36.22, 35.43, 34.64, 33.86, 33.09, 32.38, 31.61, 30.82, 30.0, 29.18, 28.4, 27.66, 26.91, 26.2, 25.51, 24.82, 24.14, 23.45, 22.76, 22.08, 21.41, 20.74, 20.09, 19.47, 18.86, 18.29, 17.73, 17.19, 16.64, 16.11, 15.62, 15.14, 14.67, 14.2, 13.71, 13.22, 12.76, 12.31, 11.88, 11.48, 11.09, 10.71, 10.33, 9.96, 9.59, 9.23, 8.88, 8.5, 8.13, 7.78, 7.44, 7.14, 6.86, 6.58, 6.31, 6.04, 5.74, 5.46, 5.18, 4.92, 4.67, 4.42, 4.19, 3.96, 3.73, 3.51, 3.29, 3.08, 2.88, 2.69, 2.49, 2.31, 2.14, 1.97, 1.81, 1.66, 1.51, 1.37, 1.23, 1.11, 0.99, 0.88, 0.77, 0.67, 0.56, 0.45, 0.34, 0.23, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17, 0.27, 0.37, 0.47, 0.57, 0.68, 0.78, 0.88, 0.98, 1.1, 1.23, 1.38, 1.52, 1.69, 1.85, 2.02, 2.2, 2.39, 2.59, 2.8, 3.02, 3.25, 3.49, 3.74, 3.99, 4.24, 4.5, 4.76, 5.02, 5.3, 5.58, 5.88, 6.19, 6.5, 6.83, 7.17, 7.47, 7.77, 8.09, 8.42, 8.74, 9.08, 9.44, 9.8, 10.17, 10.56, 10.95, 11.35, 11.75, 12.15, 12.57, 12.99, 13.41, 13.88, 14.38, 14.88, 15.41, 15.94, 16.48, 17.03, 17.58, 18.14, 18.69, 19.25, 19.82, 20.43, 21.05, 21.69, 22.35, 23.02, 23.71, 24.39, 25.07, 25.74, 26.43, 27.11, 27.81, 28.55, 29.29, 30.07, 30.88, 31.7, 32.49, 33.25, 33.95, 34.75, 35.52, 36.31, 37.1, 37.89, 38.68, 39.47, 40.26, 41.05, 41.84]


var ctx = document.getElementById("t500_current_draw");

var t500_current_draw = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pwm_value,
    datasets: [
      { 
		yAxisID: 'Current Draw',
        data: current_draw_12v,
		label: "12 V Current",
		borderColor: "#9d3ecd",
		fill: false,
      },
     { 
		yAxisID: 'Current Draw',
        data: current_draw_14v,
		label: "14 V Current",
		borderColor: "#3e95cd",
		fill: false,
      },
        { 
		yAxisID: 'Current Draw',
        data: current_draw_16v,
		label: "16 V Current",
		borderColor: "#3ecd43",
		fill: false,
      },
        { 
		yAxisID: 'Current Draw',
        data: current_draw_18v,
		label: "18 V Current",
		borderColor: "#c8cd3e",
		fill: false,
      },
      { 
		yAxisID: 'Current Draw',
        data: current_draw_20v,
		label: "20 V Current",
		borderColor: "#FF6D2D",
		fill: false,
      },
      { 
		yAxisID: 'Current Draw',
        data: current_draw_22v,
		label: "22 V Current",
		borderColor: "#cd3e3e",
		fill: false,
      },
        { 
    yAxisID: 'Current Draw',
        data: current_draw_24v,
    label: "24 V Current",
    borderColor: "#000000",
    fill: false,
      }
	    ]
	  },
  options: {
  	   tooltips: {
            mode: 'index',
            intersect: true,
            axis: 'x'
        },
legend: {
            display: true,
            position: 'bottom',
  
        },
    scales: {
      yAxes: [{
        id: 'Current Draw',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Current Draw (A)',
        fontSize: 20,
      },
        ticks: {
//                max: 12,
//                min: 0,
//                stepSize: 2
        }
      }, 
],
    
xAxes: [{
	 ticks: {
          maxTicksLimit: 50,
        },
      	scaleLabel: {
        display: true,
        labelString: 'Reverse                    ESC PWM input Value (microseconds)                    Forward',
        fontSize: 20,
      }
      }]
    },
        elements: { 
        point: { 
        radius: 0,
        hitRadius: 10, 
        hoverRadius: 5,
      } 
    } 
  }
	});