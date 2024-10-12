import type { JumbotronInterface } from "~/components/blocks/jumbotron/Jumbotron.interface";
import type { MediaSectionInterface } from "~/components/blocks/mediaSection/MediaSection.interface";

export interface Block {
    key: string,
    value: JumbotronInterface | MediaSectionInterface
}