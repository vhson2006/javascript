const query = `
SELECT 
  EXTRACT('week' FROM "timekeepings"."currentDate") AS "value", 
	SUM(
		CASE 
			WHEN 
				"timekeepings"."checkIn" IS NOT NULL AND
				"timekeepings"."checkOut" IS NOT NULL AND
				TO_CHAR("timekeepings"."checkIn", 'HH24:MM:SS') > '09:00:59' AND 
				TO_CHAR("timekeepings"."checkOut", 'HH24:MM:SS') > '18:00:00' 
			THEN 1 ELSE 0 
		END
	) AS "lateArrival",
	SUM(
		CASE 
			WHEN 
				"timekeepings"."checkIn" IS NOT NULL AND
				"timekeepings"."checkOut" IS NOT NULL AND
				TO_CHAR("timekeepings"."checkIn", 'HH24:MM:SS') < '09:00:59' AND 
				TO_CHAR("timekeepings"."checkOut", 'HH24:MM:SS') < '18:00:00' 
			THEN 1 ELSE 0 
		END
	) AS "earlyLeave",
	SUM(
		CASE 
			WHEN 
				"timekeepings"."checkIn" IS NOT NULL AND
				"timekeepings"."checkOut" IS NOT NULL AND
				TO_CHAR("timekeepings"."checkIn", 'HH24:MM:SS') > '09:00:59' AND 
				TO_CHAR("timekeepings"."checkOut", 'HH24:MM:SS') < '18:00:00' 
			THEN 1 ELSE 0 
		END
	) AS "lateAndEarly",
	SUM(
		CASE 
			WHEN 
				"timekeepings"."checkIn" IS NOT NULL AND
				"timekeepings"."checkOut" IS NOT NULL AND
				TO_CHAR("timekeepings"."checkIn", 'HH24:MM:SS') < '09:00:59' AND
				TO_CHAR("timekeepings"."checkOut", 'HH24:MM:SS') > '18:00:00' 
			THEN 1 ELSE 0 
		END
	) AS "onTime",
	SUM(CASE WHEN "timekeepings"."checkIn" IS NULL OR "timekeepings"."checkOut" IS NULL THEN 1 ELSE 0 END) AS "missing",
	SUM(CASE WHEN "timekeepings"."checkIn" IS NULL AND "timekeepings"."checkOut" IS NULL THEN 1 ELSE 0 END) AS "leave"
FROM timekeepings
WHERE "timekeepings"."accountId" = '%account'
GROUP BY EXTRACT('week' FROM "timekeepings"."currentDate")
ORDER BY "value", "lateArrival";`;

export default query;
