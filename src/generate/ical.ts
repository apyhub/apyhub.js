import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
/**
 * Generates an iCalendar file from a list of parameters.
 * @param {Object} params - The parameters for the iCalendar file generation.
 * @param {"file"|"url"} params.responseFormat - The desired response format.
 * @param {string} params.summary - The meeting summary.
 * @param {string} params.description - The meeting description.
 * @param {string} params.organizerEmail - The meeting organizer's email address.
 * @param {string[]} params.attendeesEmails - The meeting attendees' email addresses.
 * @param {string} [params.location] - The meeting location.
 * @param {string} params.timeZone - The meeting time zone.
 * @param {string} params.startTime - The meeting start time.
 * @param {string} params.endTime - The meeting end time.
 * @param {string} params.meetingDate - The meeting date.
 * @param {boolean} params.recurring - Whether the meeting is recurring.
 * @param {Object} [params.recurrence] - The meeting recurrence parameters.
 * @param {string} [params.recurrence.frequency] - The meeting recurrence frequency.
 * @param {number} [params.recurrence.count] - The meeting recurrence count.
 *
 * @return {Promise<{data: string}>} - A promise that resolves with an object containing the resulting iCalendar file or URL as a string.
 *
 * @example
 *
 * const { generate } = require("apyhub");
 *
 * const ical = async () => {
 *   const data = await generate.ical({
 *     responseFormat: "url",
 *     summary: "Meeting",
 *     description: "Meeting description",
 *     organizerEmail: "your@mail.com",
 *     attendeesEmails: ["john@mail.com", "sally@mail.com"],
 *     timeZone: "America/New_York",
 *     startTime: "10:00",
 *     endTime: "11:00",
 *     meetingDate: "2020-01-01",
 *     recurring: true,
 *     recurrence: {
 *       frequency: "WEEKLY",
 *       count: 5,
 *      },
 *   });
 *   return data;
 */
async function ical({
  output,
  responseFormat,
  summary,
  description,
  organizerEmail,
  attendeesEmails,
  location,
  timeZone,
  startTime,
  endTime,
  meetingDate,
  recurring,
  recurrence,
}: {
  output?: string;
  responseFormat: "file" | "url";
  summary: string;
  description: string;
  organizerEmail: string;
  attendeesEmails: string[];
  location?: string;
  timeZone: string;
  startTime: string;
  endTime: string;
  meetingDate: string;
  recurring: boolean;
  recurrence?: {
    frequency: string;
    count: number;
  };
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({
    responseFormat,
    summary,
    description,
    organizerEmail,
    attendeesEmails,
    timeZone,
    startTime,
    endTime,
    meetingDate,
    recurring,
  });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const url = `https://api.apyhub.com/generate/ical/${responseFormat}?output=${output ??
    "invite.ics"}`;
  return await client.request("post", url, {
    summary,
    description,
    organizer_email: organizerEmail,
    attendees_email: attendeesEmails,
    location,
    time_zone: timeZone,
    start_time: startTime,
    end_time: endTime,
    meeting_date: meetingDate,
    recurring,
    recurrence,
  });
}

export { ical };
