import { config } from "config/Constants";
import { Request } from "express";
import shortId from "shortid";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        // Ver se a url ja existe
        // criar o hash
        const { URLorigin } = req.body
        const HASH = shortId.generate()
        const ShortURL = `${config.API_URL}/${HASH}`

        // salvar no banco
        // retornar
        res.json({ URLorigin, HASH, ShortURL })
    }
}